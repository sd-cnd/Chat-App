import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={'34c1dcf6-f821-4b09-8c62-a0e36ef56878'}
        username={props.user.username}
        secret={props.user.username}
      />
    </div>
  );
};

export default ChatsPage;
