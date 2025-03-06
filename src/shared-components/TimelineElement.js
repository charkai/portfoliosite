const TimelineElement = ({ company, role, startDate, endDate, info }) => {
    return (
        <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-10 mb-3 sm:mb-0 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-400">{startDate}- {endDate}</time>
            <div class="text-xl font-bold text-slate-900 dark:text-slate-100">{company}<span className="italic font-normal">- {role}</span></div>
        </div>
        <div class="text-slate-500 ml-1 text-lg text-left">{info}</div>
    </div>  
    );

}
export default TimelineElement;