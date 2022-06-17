import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - present'} 
                        title={'Full Stack Web Developer'}
                        subTitle={'MERN'}
                        text={'As a freeLancer ,Creating and Design a fully working web apps [Personal portfolios ,e-commerce, chat app , companies web sites and more... ]'} 
                    />
                        <ResumeItem 
                            year={'Oct 2018 - Dec 2019'} 
                            title={'IT Specialist'}
                            subTitle={' Watanya for roads inc'}
                            text={'I was responsible for all technical  issues in addition to maintain all the devices , networks and surveillance systems '} 
                        />
                        <ResumeItem 
                            year={'Jul 2018 - Oct 2018'} 
                            title={'web developer intern'}
                            subTitle={' Rwabett Inc'}
                            text={'worked on simple user interfaces of web sites and an e-commerce web site with PHP '} 
                        />
                    <ResumeItem 
                        year={'june 2017 - oct 2017'} 
                        title={'it specialist intern'}
                        subTitle={'MISR For Petroleum'}
                        text={'I was responsible for all technical  issues in addition to maintain all the devices and networks '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2014 - 2018'} 
                        title={'Computer Science Bachelor  Degree'}
                        subTitle={'Shorouk Academy'}
                    />
                 
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
