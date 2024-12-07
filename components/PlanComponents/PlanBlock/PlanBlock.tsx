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
import { PlanInterface } from '../../../interfaces/plan.interface';
import { PlanItem } from '../PlanItem/PlanItem';


export const PlanBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [duration, setDuration] = useState<'monthly' | 'yearly'>('monthly');

    const plans: PlanInterface[] = [
        {
            id: 1,
            name: 'Basic',
            priceM: 3,
            priceY: 30,
            devices: 1,
            servers: 1,
            speed: 'limited',
        },
        {
            id: 2,
            name: 'Pro',
            priceM: 5,
            priceY: 50,
            devices: 3,
            servers: 5,
            speed: 'normal',
        },
        {
            id: 3,
            name: 'Marat',
            priceM: 10,
            priceY: 110,
            devices: 10,
            servers: 10,
            speed: 'increased',
        },
    ];

    return (
        <div className={styles.planBlock}>
            <PlanDuration duration={duration} setDuration={setDuration} />
            <Swiper className={styles.planList}
                modules={[Pagination, A11y, Autoplay]}
                slidesPerView={1.2}
                scrollbar={{ draggable: true }}>
                {
                    plans.map(p => (
                        <SwiperSlide key={p.id}>
                            <PlanItem name={p.name} priceM={p.priceM}
                                priceY={p.priceY} duration={duration}
                                devices={p.devices} servers={p.servers}
                                speed={p.speed}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
