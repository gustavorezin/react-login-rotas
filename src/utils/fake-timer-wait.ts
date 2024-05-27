export async function fakeTimerWait() {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.round(Math.random() * 3000))
  );
}
