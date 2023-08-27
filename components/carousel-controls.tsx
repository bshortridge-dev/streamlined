// components/CarouselControls.tsx
"use client"

import classNames from "classnames"

type Props = {
  canScrollPrev: boolean
  canScrollNext: boolean
  onPrev(): void
  onNext(): void
}
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-center gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev()
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-4 py-2 text-xs text-white rounded-md hover:bg-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900  lg:hover:bg-slate-100 lg:hover:text-slate-900":
            true,
          "bg-slate-500": !props.canScrollNext,
          "bg-slate-600": props.canScrollNext,
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext()
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "px-4 py-2 text-xs text-white rounded-md hover:bg-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900 lg:hover:bg-slate-100 lg:hover:text-slate-900":
            true,
          "bg-slate-500": !props.canScrollNext,
          "bg-slate-600": props.canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  )
}
export default CarouselControls
