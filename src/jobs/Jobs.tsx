import SkeletonLoader from "../ui-common/SkeletonLoader";
import JobCard from "./components/JobCard";
import useJobs from "./utils/getJobs";

const Jobs = () => {
  const { jobs, loading, error } = useJobs();
  if (loading) {
    return (
      <div className="grid-cols-3 grid gap-4 xl:grid-cols-2 sm:grid-cols-1 pt-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="grid-cols-3 grid gap-4 xl:grid-cols-2 sm:grid-cols-1 pt-8">
      {jobs.map((job) => (
        <JobCard key={job.id} card={job} />
      ))}
    </div>
  );
};

export default Jobs;
