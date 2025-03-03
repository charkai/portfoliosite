import ExternalLinkButton from "./ExternalLinkButton"
import ProjectTag from "./ProjectTag"

const ProjectTile = ({projectName, info, skillsInvolved, externalLinkName, externalLinkAddress}) => {
    return (
        <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow text-left">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{projectName}</h5>
            <p class="mb-3 font-normal text-xl text-gray-700">{info}</p>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
                {skillsInvolved.map((skill, index) => (
                    <ProjectTag 
                        key={index} 
                        tag={skill} 
                    />
                ))}
            </div>   
            <div className="mt-4">           
                <ExternalLinkButton
                    linkName={externalLinkName}
                    linkAddress={externalLinkAddress}
                />
            </div>      
        </div>
    );
}

export default ProjectTile;