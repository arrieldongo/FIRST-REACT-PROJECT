import { Button } from "@/ui/design-system/button/button"
import clsx from "clsx"

interface Props {
  next?: () => void
  prev?: () => void
  isFirstStep?: () => boolean
  isFinaltStep?: () => boolean
  isLoading?: boolean
}

export const OnBoardingFooter = ({
  next,
  prev,
  isFirstStep,
  isFinaltStep,
  isLoading,
}: Props) => {

  let actionButtonTitle: string

  if (isFirstStep && isFirstStep()) {
    actionButtonTitle = "Démarrer"
  } else if (isFinaltStep && isFinaltStep()) {
    actionButtonTitle = "Terminer"
  }
  else {
    actionButtonTitle = "Continuer"
  }

  
  return (
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
      <div className={clsx(
        prev && !next && "justify-start",
        !prev && next && "justify-end",
        prev && next && "justify-between",
        "flex items-center gap-5"
      )}>

        {
          prev && (
            <Button
              disabled={isLoading}
              variant={!isLoading ? "outline" : "disable"}
              action={prev}
            >
              Retour
            </Button>

          )
        }

        {
          next && (
            <Button
              isLoading={isLoading}
              action={next}
            >
              {actionButtonTitle}
            </Button>

          )
        }


      </div>
    </div>
  )
}