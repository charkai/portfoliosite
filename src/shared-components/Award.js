const Award = ({awardName, awardDetails, awardDate}) => {

    return (
        <li class="pb-3 sm:pb-4 pt-3 pr-4">
        <div className="flex items-center space-x-4">
            <div class="shrink-0">
                <svg class="pt-3 w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
                    <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
                </svg>
            </div>
            <div class="flex-1 min-w-0">
                <p class="mt-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    {awardName}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 text-left">
                    {awardDetails}
                </p>
            </div>
            <div class="max-w-4 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {awardDate}
            </div>
        </div>
    </li>
    );

}




export default Award;


