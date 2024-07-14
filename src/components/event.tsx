import {useRef, useEffect} from 'react';

export function Event(props): JSX.Element {
    const ref = useRef<HTMLLIElement>();

    const { onSize } = props;

    useEffect(() => {
        if (ref.current) {
            const width = ref.current.offsetWidth;
            const height = ref.current.offsetHeight;
            if (onSize) {
                onSize({ width, height });
            }
        }
    });
    return (
        <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
            <button className="event__button">
                <span rel="preload" className={`event__icon event__icon_${props.icon}`}
                      role="img" aria-label={props.iconLabel}></span>
                <h4 className="event__title">{props.title}</h4>
                {props.subtitle &&
                    <span className="event__subtitle">{props.subtitle}</span>
                }
            </button>
        </li>
    );
}

export default Event;