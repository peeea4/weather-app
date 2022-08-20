import { useState } from "react";
import ApiCalendar from "react-google-calendar-api";

import { Event } from "@/components/Event";
import {
    AuthorizeContainer,
    Btn,
    EventContainerWrapper,
    EventListWrapper,
} from "@/components/EventContainer/styled";

const config = {
    clientId: "83600401000-jmhess5g40l48j1lsdbsgkdocjh05pqj.apps.googleusercontent.com",
    apiKey: "AIzaSyAAxjE2Fbt4ZEI5dNdSp2ipnbKfCFZJBoc",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
};
const apiCalendar = new ApiCalendar(config);

export const EventContainer = () => {
    const [events, setEvents] = useState([]);
    const [isLogin, setIsLogin] = useState();
    const handleItemClick = (event, name) => {
        if (name === "sign-in") {
            apiCalendar.handleAuthClick();
        } else if (name === "sign-out") {
            apiCalendar.handleSignoutClick();
        }
    };

    const getEvents = () => {
        try {
            apiCalendar
                .listUpcomingEvents(10)
                .then(({ result }) => {
                    setEvents(result.items);
                    if (result.accessRole) {
                        setIsLogin(true);
                    }
                })
                .catch(() => {});
        } catch {
            alert("You need to authorize!");
        }
    };

    return (
        <EventContainerWrapper>
            <AuthorizeContainer>
                {isLogin ? (
                    <Btn onClick={(e) => handleItemClick(e, "sign-out")}>Sign Out</Btn>
                ) : (
                    <Btn onClick={(e) => handleItemClick(e, "sign-in")}>Sign In</Btn>
                )}
                <Btn onClick={() => getEvents()}>Get Events</Btn>
            </AuthorizeContainer>
            <EventListWrapper>
                {events.map((item, index) => (
                    <Event key={index} item={item} isLast={events.length - 1 === index} />
                ))}
            </EventListWrapper>
        </EventContainerWrapper>
    );
};
