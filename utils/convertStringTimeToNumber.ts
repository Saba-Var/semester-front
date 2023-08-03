export const convertStringTimeToNumber = (time: string): number => {
  const [hour, minute] = time.split(':')
  return +minute === 30 ? +hour + 0.5 : +hour
}
