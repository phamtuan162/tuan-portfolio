import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="md"
      className="max-w-40 group"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-accent"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ml-2" />
        </>
      )}
    </Button>
  );
};
export default SubmitBtn;
