import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
    const {getJobs,jobs,isLoading,page,totalJobs,search, searchStatus, searchType, sort,numOfPages} = useAppContext()
    useEffect(() => {
        getJobs()
    },[search, searchStatus, searchType, sort,page])
    if(isLoading){
        return <Loading center />
    }
    if(jobs.length === 0){
        return <Wrapper>
            No Jobs To Display
        </Wrapper>
    }

  return (
     <Wrapper>
        <h5>
            {totalJobs} job{jobs.length > 1 && 's'} found
        </h5>
        <div className='jobs'>
            {jobs.map((item) => {
                return <Job key={item._id} {...item} />
            })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
     </Wrapper>
  )
}

export default JobsContainer
