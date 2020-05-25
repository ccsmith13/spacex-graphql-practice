import React, {Fragment, useState} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import Pagination from './Pagination';
import loadingGif from '../loading.gif';

//code her
const LAUNCHES_QUERY = gql`
    query LaunchesQuery { 
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = () => {
    const [currentPage, setCurrentPage] = useState(1);
        return(
            <div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey />
                <Query query={LAUNCHES_QUERY}>
                    {
                    //loading is a boolean, can use this to put a spinner in for loading text
                        ({ loading, error, data }) => {
                            if(loading) return <div className="d-flex justify-content-center"><img src={loadingGif} alt="loading"/></div>
                            if(error) console.log(error);
                            const launchesShown = data.launches.slice((currentPage-1)*10,currentPage*10);

                            return <Fragment>
                                {
                                    launchesShown.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch} />
                                    ))
                                }
                            </Fragment>;
                        }
                    }
                </Query>
            </Fragment>
            </div>
        )
};

export default Launches;