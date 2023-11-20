import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectData } from '../service/action';
import '../assets/styles/Header.css'
import { BoardIcon } from '../utils/BIcons';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const { tickets, users } = useSelector((state) => state.dataSlice);

    const orderStatus = () => {
        if (localStorage.getItem("order")) {
            return localStorage.getItem("order");
        } else {
            return "priority";
        }
    };

    const groupStatus = () => {
        if (localStorage.getItem("group")) {
            return localStorage.getItem("group");
        } else {
            return "status";
        }
    };

    const [groupBy, setGroupBy] = useState(groupStatus());
    const [orderBy, setOrderBy] = useState(orderStatus());

    const hideRef = useRef(null);

    // Function to handle changes in grouping and ordering options
    const handleGroups = (e, value) => {
        setIsVisible(!isVisible);
        if (value) {
            setGroupBy(e.target.value);
            localStorage.setItem("group", e.target.value); //storing grouping option in localStorage
        } else {
            setOrderBy(e.target.value);
            localStorage.setItem("order", e.target.value); //storing order option in localStorage
        }
    };

    useEffect(() => {
        if (groupBy === "user") {
            dispatch(selectData(groupBy, { tickets, users }, orderBy));
            // console.log("object", tickets)
        }
        else {
            dispatch(selectData(groupBy, tickets, orderBy));
        }
    }, [dispatch, tickets, groupBy, users, orderBy]);

    useEffect(() => {
        // Add event listener to detect clicks outside the form
        const handleClickOutside = (e) => {
            if (hideRef.current && !hideRef.current.contains(e.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='header_container'>
            <div ref={hideRef}>
                <div
                    className="header_display"
                    onClick={() => setIsVisible(!isVisible)}

                >
                    <BoardIcon element={"HeaderDisplay"} styleClass={'header_dis_ic'}/>

                    {/* className='header_dis_icon1'  */}

                    <span className='header_dis'>Display</span>
                    <div className='header_dis_icon2' >
                        <BoardIcon element={"HeaderArraowDown"} styleClass={'header_dis_ic'}/>
                    </div>

                    {/* <MdKeyboardArrowDown className='header_dis_icon2' /> */}
                </div>
                <div className='header_icons_container'>

                    <BoardIcon element={"github"}  title='Github' styleClass={'header_icons'}/>
                    <BoardIcon element={"linkedin"} styleClass={'header_icons'} title='LinkedIn' />
                    <BoardIcon element={"Human"} styleClass={'header_icons'} title='human.txt' />
                </div>
                {isVisible && (
                    <>
                        <div className="header_popup" >
                            <div className="group-select">
                                <span className='header_grp'><BoardIcon element={"groupBy"} styleClass={'order'}/> Grouping</span>
                                <select
                                    value={groupBy}
                                    onChange={(e) => handleGroups(e, true)}
                                    className="header_select"
                                    name="group"
                                    id="group"
                                >
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                            <div>
                                <span className='header_grp'><BoardIcon element={"orderBy"} styleClass={'order'}/> Ordering</span>
                                <select
                                    value={orderBy}
                                    onChange={(e) => handleGroups(e, false)}
                                    className="header_order"
                                    name="order"
                                    id="order"
                                >
                                    <option value="priority" className='order_option'>Priority</option>
                                    <option value="title" className='order_option'>Title</option>
                                </select>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header