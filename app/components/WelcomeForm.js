import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { LoadingCircle } from '../icons';

const WelcomeForm = ({
  setAssistantModel,
  assistantModel,
  startAssistant,
  isButtonDisabled,
  isStartLoading
}) => {
  // Hardcoded values
  const assistantName = "ToughBDR";
  const assistantDescription = "ToughBDR for ToughCustomer.ai";

  return (
    <div className="border-gray-500 bg-gray-200 sm:mx-0 mx-5 mt-20 max-w-screen-md rounded-md border-2 sm:w-full">
      <div className="flex flex-col space-y-4 p-7 sm:p-10">
        <h1 className="text-lg font-semibold text-black">
          Welcome to Agent42!
        </h1>
        <form className="flex flex-col space-y-3">
          {/* Model Selection Buttons */}
          <div>
            <button
              type="button"
              onClick={() => setAssistantModel('gpt-4-1106-preview')}
              className={`p-1 border border-gray-400 rounded-md ${assistantModel === 'gpt-4-1106-preview' ? 'bg-blue-500 text-white' : ''}`}
            >
              GPT-4
            </button>
            <button
              type="button"
              onClick={() => setAssistantModel('gpt-3.5-turbo-1106')}
              className={`p-1 border border-gray-400 rounded-md ${assistantModel === 'gpt-3.5-turbo-1106' ? 'bg-blue-500 text-white' : ''}`}
            >
              GPT-3.5
            </button>
          </div>

          {/* Start Button */}
          <button
            type="button"
            onClick={startAssistant}
            disabled={isButtonDisabled}
            className={`p-2 rounded-md flex justify-center items-center ${isButtonDisabled ? 'bg-gray-500 text-gray-300' : 'bg-green-500 text-white'}`}
          >
            {isStartLoading ? <LoadingCircle /> : "Start"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeForm;
