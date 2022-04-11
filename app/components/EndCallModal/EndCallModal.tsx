import { useRouter } from "next/router";
import { CURRENT_VISIT } from "../../constants";
import { CurrentVisit } from "../../interfaces";
import clientStorage from "../../services/clientStorage";
import datastoreService from "../../services/datastoreService";
import { useVisitContext } from "../../state/VisitContext";
import useVideoContext from "../Base/VideoProvider/useVideoContext/useVideoContext";
import { Button } from "../Button";
import { Modal } from "../Modal"

export interface EndCallModalProps {
  close: () => void;
  isVisible: boolean;
  isProvider: boolean;
}

export const EndCallModal = ({ close, isVisible, isProvider = false }: EndCallModalProps) => {
  const { room } = useVideoContext();
  const router = useRouter();
  const { user } = useVisitContext();

  async function endCall() {
    close();
    room.disconnect();
    const resp = await datastoreService.completeRoom(user.token, room.sid);
    const currVisit = await clientStorage.getFromStorage<CurrentVisit>(CURRENT_VISIT);
    if (currVisit && currVisit.visitType === 'WALKIN') {
      await datastoreService.removeAppointment(user.token, currVisit.visitId);
    }
    isProvider ? router.push('/provider/visit-survey/') : router.push('/patient/visit-survey/');
  }

  return (
    <Modal backdropClick={close} isVisible={isVisible}>
      <div className="mb-3 border-b border-border-primary">
        <h3 className="my-3 px-5">{isProvider ? "End Call for all participants?" : "End Call?"}</h3>
      </div>
      <div className="flex mb-5 mx-5 items-center justify-center">
        <div className="mx-2">
          <Button onClick={endCall}>
            {isProvider ? "End Session" : "Leave Call"}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
