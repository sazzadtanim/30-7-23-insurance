import RightArrowSmall from '@svg/RightArrowSmall.svg'

export default function TopBar(props: { array: string[]; username: string }) {
  const arrayLength = props?.array?.length - 1
  return (
    <div className='mb-4 flex justify-between'>
      <p className='breadcrums flex items-center justify-center gap-3 text-center font-lato text-xl font-semibold'>
        {props?.array?.map((item, index) =>
          index !== arrayLength ? (
            <>
              <span
                className='flex items-center justify-center capitalize text-gray-500'
                key={index}
              >
                {item}
              </span>
              <span>
                <RightArrowSmall />
              </span>
            </>
          ) : (
            <span className='capitalize text-black' key={index}>
              {item}
            </span>
          )
        )}
      </p>

      {/* User info */}
      <div className='flex gap-2'>
        <div className='flex h-8 w-8 items-center justify-center  rounded-full bg-green-300 text-center text-xl capitalize'>
          {props?.username?.charAt(0)}
        </div>
        <span className='capitalize'>{props.username}</span>
      </div>
    </div>
  )
}
