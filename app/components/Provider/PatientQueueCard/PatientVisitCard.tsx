import {EHRAppointment, TelehealthVisit} from "../../../types";
import { joinClasses } from "../../../utils"
import WaitTimer from '../../WaitTimer/WaitTimer'


export interface PatientVisitCardProps {
  visit: TelehealthVisit;
  index: number;
  appointmentData: EHRAppointment;
  isOnDemand?: boolean; 
}

export const PatientVisitCard = ({visit, index, appointmentData, isOnDemand = false}: PatientVisitCardProps) => {
  return (
    <div
      key={index}
      className={joinClasses(
        'grid grid-cols-2 gap-4 font-bold text-xs px-1 py-2',
        isOnDemand ? 'bg-[#eff6ff] border border-top-[#d4d4d4]' : index % 2 ? '' : 'bg-[#FAFAFA]'
      )}
    >
      <div>
        <a className="text-link underline">{visit.ehrPatient.name}</a>
        {isOnDemand && <span className="text-red-400"> (On Demand)</span>}
          <WaitTimer appointmentData={appointmentData}/>
      </div>
      <div className="line-clamp-2 overflow-ellipsis overflow-hidden text-dark">
        {visit.ehrAppointment.reason}
      </div>
    </div>
  )
}