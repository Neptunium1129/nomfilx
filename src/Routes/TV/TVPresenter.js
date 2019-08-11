import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
  padding: 20px;
`;


const TVPresenrter = ({ topRated, popular, airingToday, error, loading })  => 
loading ? <Loader /> : (
    <Container>
        {topRated && topRated.length > 0 && 
        (<Section title="topRated TV">
            {topRated.map(show => (
             <Poster 
              key={show.id}
              id={show.id}
              title={show.original_name}
              koTitle={show.name}
              imageUrl={show.poster_path}
              backdropImg={show.backdrop_path}
              rating={show.vote_average}
              year={show.first_air_date}
            />
            ))}
        </Section>
        )}
        {popular && popular.length > 0 && 
        (<Section title="popular TV">
            {popular.map(show => (
             <Poster 
              key={show.id}
              id={show.id}
              title={show.original_name}
              koTitle={show.name}
              imageUrl={show.poster_path}
              backdropImg={show.backdrop_path}
              rating={show.vote_average}
              year={show.first_air_date}
            />
            ))}
        </Section>
        )}
        {airingToday && airingToday.length > 0 && 
        (<Section title="airingToday">
            {airingToday.map(show => (
             <Poster 
              key={show.id}
              id={show.id}
              title={show.original_name}
              koTitle={show.name}
              imageUrl={show.poster_path}
              backdropImg={show.backdrop_path}
              rating={show.vote_average}
              year={show.first_air_date}
            />
            ))}
        </Section>
        )}
        {error && <Message text={error} color="#c0392b" />}
    </Container>
);

TVPresenrter.protoTypes = {
    topRated : PropTypes.array,
    airingToday : PropTypes.array,
    popular : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired
};

 export default TVPresenrter;