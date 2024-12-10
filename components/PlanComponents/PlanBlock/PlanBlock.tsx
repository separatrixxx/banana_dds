import { PlanBlockProps } from './PlanBlock.props';
import styles from './PlanBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { PlanDuration } from '../PlanDuration/PlanDuration';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { PlanItem } from '../PlanItem/PlanItem';
import { getPlans } from '../../../helpers/plan.helper';


export const PlanBlock = ({ duration, isSmall, setDuration, setActivePlan }: PlanBlockProps): JSX.Element => {
    return (
        <div className={styles.planBlock}>
            <PlanDuration duration={duration} setDuration={setDuration} />
            <Swiper className={styles.planList}
                modules={[Pagination, A11y, Autoplay]}
                slidesPerView={1.2}
                scrollbar={{ draggable: true }}
                onSlideChange={(swiper) => setActivePlan(getPlans()[swiper.activeIndex].name as 'Basic')}>
                {
                    getPlans().map(p => (
                        <SwiperSlide key={p.name}>
                            <PlanItem name={p.name} priceM={p.priceM}
                                priceY={p.priceY} duration={duration.name}
                                devices={p.devices} servers={p.servers}
                                traffic={p.traffic} isSmall={isSmall} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
