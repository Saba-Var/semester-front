export const generateNewTimeStringFromNumber = (
  time: number,
  type: 'starting' | 'ending'
) => {
  let newTimeString = ''

  if (time % 1 !== 0) {
    newTimeString = `${time === 9.5 ? 0 : ''}${Math.floor(time)}:30`
  } else if (time === 23.5) {
    newTimeString = type === 'starting' ? '23:00' : '23:30'
  } else if (time === 9) {
    newTimeString = '09:00'
  } else {
    newTimeString = `${time}:00`
  }

  return newTimeString
}
