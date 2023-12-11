import SkeletonLoader from "../ui-common/SkeletonLoader";
import useJobs from "./utils/getJobs";
import { useNavigate } from "react-router-dom";

function JobDetails() {
  const navigate = useNavigate();
  const { selectedJob, loading, error } = useJobs();

  const goBackHandler = () => {
    navigate(-1);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return (
      <div className="flex flex-wrap gap-2 pt-8">
        {Array.from({ length: 1 }).map((_, index) => (
          <SkeletonLoader isFullWidth key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <button className="bg-slate-400 p-2" onClick={goBackHandler}>
        Go Back
      </button>
      <div className="py-4">
        <img src={selectedJob?.url} alt={selectedJob?.title} />
        <h2 className="py-4 text-xl font-bold">{selectedJob?.title}</h2>
        <p className="text-slate-600">{selectedJob?.summary}</p>
      </div>
    </div>
  );
}

export default JobDetails;
