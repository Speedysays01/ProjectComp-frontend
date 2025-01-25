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
          date="2022"
          iconStyle={{ background: '#00899B', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Step 1</h4>
          <p>Description of Step 1: Initial stage of the project</p>
        </VerticalTimelineElement>

        {/* Timeline Item 2 */}
        <VerticalTimelineElement
          className={`${styles.verticalTimelineElement} vertical-timeline-element--work`}
          date="2023"
          iconStyle={{ background: '#00505b', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Step 2</h4>
          <p>Description of Step 2: Development phase</p>
        </VerticalTimelineElement>

        {/* Timeline Item 3 */}
        <VerticalTimelineElement
          className={`${styles.verticalTimelineElement} vertical-timeline-element--work`}
          date="2024"
          iconStyle={{ background: '#00383e', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Step 3</h4>
          <p>Description of Step 3: Final stage and release</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
