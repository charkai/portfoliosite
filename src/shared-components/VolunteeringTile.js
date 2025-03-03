import ExternalLinkButton from "./ExternalLinkButton";

const VolunteeringTile = ({name, startDate, endDate, info, link}) => {
    return (
        <div className="rounded-xl shadow-lg mb-10 sm:mb-0 bg-white">
            <div class="p-6 text-surface">
                <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800">{name}</h5>
                <h4 class="mb-2 text-lg font-medium leading-tight text-gray-600 italic">{startDate} - {endDate}</h4>
                <p class="mb-4 text-base text-slate-500">
                {info}
                </p>
                <ExternalLinkButton
                    linkName={name}
                    linkAddress={link}
                />
            </div>
        </div>
    );
}

export default VolunteeringTile;