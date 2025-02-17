import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">University of Massachusetts</h3>
            <h4 className="vertical-timeline-element-subtitle">Amherst, MA</h4>
            <p>
              Distributed Systems, Introduction to Neural Networks, Introduction to Software Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Atica Global, Founding Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pune, MH</h4>
            <p>
            Built scalable systems and led backend development, DevOps, and database management for a growing hospitality startup.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">Indian Institute of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Bombay, MH</h4>
            <p>
              Introduction to ML, Data Analysis & Interpretation, Probability & Random Processes
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ernst & Young, Summer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, DL</h4>
            <p>
            Analyzed payment processes and recommended strategies for integrating Cambodia's Cash Incentive program.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;