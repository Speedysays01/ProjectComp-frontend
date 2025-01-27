import React, { useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './TimeLine.module.css'; // Your custom styles

const TimeLine = () => {
  const timelineRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.elementEnter);
          } else {
            entry.target.classList.remove(styles.elementEnter);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = timelineRef.current.querySelectorAll(`.${styles.verticalTimelineElement}`);
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.timelineContainer} ref={timelineRef}>
      <h3 className={styles.title}>TIMELINE</h3>
      <VerticalTimeline>
        {/* Timeline Item 1 */}
        <VerticalTimelineElement
          className={`${styles.verticalTimelineElement} vertical-timeline-element--work`}
          date="15 feb"
          iconStyle={{ background: '#00899B', color: '#fff' }}
        >
          <h3>STAGE 1: RESGISTRATION PHASE</h3>
          <p>This is the first step towards participating in the competition. Leader will get a registration email to confirm team's spot. Every team member will get a participation E-certificate.</p>
        </VerticalTimelineElement>

        {/* Timeline Item 2 */}
        <VerticalTimelineElement
          className={`${styles.verticalTimelineElement} vertical-timeline-element--work`}
          date="25 Feb- 5 Mar"
          iconStyle={{ background: '#00505b', color: '#fff' }}
        >

          <h3>STAGE 2: ONLINE ROUND</h3>
          <p> Teams must submit their progress, including documents like presentations, reports, or project outlines etc. within given deadline. This will help us understand your current approach, and from these, we will select 50 teams to proceed to the next stage and to get merit certificates </p>
        </VerticalTimelineElement>

        {/* Timeline Item 3 */}
        <VerticalTimelineElement
          className={`${styles.verticalTimelineElement} vertical-timeline-element--work`}
          date="17th Mar"
          iconStyle={{ background: '#00383e', color: '#fff' }}
        >
          <h3>STAGE 3: OFLINE ROUND</h3>
  
          <p>The top 50 teams from the online round will be invited to the department for the offline round. Here, the final 3 teams from each category will be selected based on their project outcomes. Winners will recieve cash prizes and certificates. </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
