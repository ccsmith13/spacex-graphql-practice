import React from 'react';

const Pagination = (props) => {
    function clickPage(e) {
        props.setCurrentPage(e);
    }

    function clickRightArrow(e) {
        props.setCurrentPage(e+3);
    }

    function clickLeftArrow(e) {
        if(e>3){
            props.setCurrentPage(e-3);
        }
        else{
            props.setCurrentPage(1);
        }
    }
    
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                <li className="page-item" onClick={(e)=>{clickLeftArrow(props.currentPage)}}>
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>

                <li className="page-link" onClick={(e)=>{clickPage(props.currentPage)}}>{props.currentPage}</li>
                <li className="page-link" onClick={(e)=>{clickPage(props.currentPage+1)}}>{props.currentPage+1}</li>
                <li className="page-link" onClick={(e)=>{clickPage(props.currentPage+2)}}>{props.currentPage+2}</li>
                
                <li className="page-item" onClick={(e)=>{clickRightArrow(props.currentPage)}}>
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    )};

export default Pagination;