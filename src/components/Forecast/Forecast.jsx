import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './Forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export default function Forecast({ data }) {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    // eslint-disable-next-line array-callback-return
    // data.list.splice(0, 7).map((item, i) => {
    //     console.log(item);
    // })

    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, i) => {
                    return <AccordionItem key={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt='img'></img>
                                    <label className='day'>
                                        {forecastDays[i]}
                                    </label>
                                    <label className='desc'>
                                        {item.weather[0].description}
                                    </label>
                                    <label className='minmax'>
                                        {item.main.temp_min} °C / {item.main.temp_max} °C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='dailyDetails'>
                                <div className='dailyDetailsItem'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className='dailyDetailsItem'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className='dailyDetailsItem'>
                                    <label>Cloduds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className='dailyDetailsItem'>
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                })}
            </Accordion>
        </>
    )
}
