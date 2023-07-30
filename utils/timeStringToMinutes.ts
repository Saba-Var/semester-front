export const timeStringToMinutes = (timeString: string): number => {
  const [hours, minutes] = timeString.split(':').map((str) => parseInt(str))
  return hours * 60 + minutes
}
