const DotsIcon = () => {
  return (
    <svg
      className='absolute top-8 left-1/2 -ml-3'
      viewBox='0 0 404 392'
      height={392}
      width={404}
      fill='none'
    >
      <defs>
        <pattern
          id='8228f071-bcee-4ec8-905a-2a059a2cc4fb'
          patternUnits='userSpaceOnUse'
          height={20}
          width={20}
          x={0}
          y={0}
        >
          <rect
            className='text-gray-200'
            fill='currentColor'
            height={4}
            width={4}
            x={0}
            y={0}
          />
        </pattern>
      </defs>
      <rect
        fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)'
        height={392}
        width={404}
      />
    </svg>
  )
}

export default DotsIcon
