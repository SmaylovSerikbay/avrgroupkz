/**
 * Instrumentation: перехват необработанных ошибок для предотвращения "молчаливого" падения процесса.
 * При 502 Bad Gateway проверьте логи на:
 * - ReferenceError: returnNaN — замените в коде returnNaN на "return NaN;" (с пробелом).
 * - EACCES /var/lrt или /etc/lrt — замените абсолютные пути на пути внутри проекта (например ./var/lrt).
 */

export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  process.on('uncaughtException', (err: Error) => {
    const msg = err?.message ?? String(err);
    console.error('[instrumentation] uncaughtException:', msg, err?.stack);

    if (msg.includes('returnNaN') || (err?.name === 'ReferenceError' && msg.includes('returnNaN'))) {
      console.error('[instrumentation] Подсказка: в коде опечатка — должно быть "return NaN;", а не "returnNaN;". Найдите и исправьте.');
    }
    if (msg.includes('EACCES') && (msg.includes('/var/lrt') || msg.includes('/etc/lrt'))) {
      console.error('[instrumentation] Подсказка: код пишет в системные каталоги. Используйте путь внутри проекта, например ./var/lrt или process.cwd() + "/var/lrt".');
    }

    // Не выключаем процесс — падает только запрос, сайт продолжает работать
    // process.exit(1);
  });

  process.on('unhandledRejection', (reason: unknown) => {
    console.error('[instrumentation] unhandledRejection:', reason);
  });
}

export async function onRequestError(
  err: Error & { digest?: string },
  request: { path: string; method: string },
  context: { routerKind?: string; routePath?: string; errorType?: string }
) {
  console.error('[instrumentation] onRequestError:', {
    path: request.path,
    method: request.method,
    errorType: context.errorType,
    message: err?.message,
    digest: err?.digest,
  });
}
