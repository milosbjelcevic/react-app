import { useState, useEffect } from "react";
import axios from "axios";
import { JobType } from "../types/Job";
import { useParams } from "react-router-dom";

const useJobs = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://mockly.app/api/74df268c-2346-4aa9-a6d3-8fafc1d66ffa/jobs"
        );
        setJobs(response.data);

        // If id exists in params, find the corresponding job
        if (id) {
          const selected = response.data.find((job: JobType) => job.id === id);
          setSelectedJob(selected || null);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [id]);

  return { jobs, loading, error, selectedJob };
};

export default useJobs;
