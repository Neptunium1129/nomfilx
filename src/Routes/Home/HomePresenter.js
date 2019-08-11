import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding : 20px;
`;


const HomePresenrter = ({ nowPlaying, upcoming, popular, error, loading  }) => 
loading ? null : (
    <Container>
        {upcoming && upcoming.length > 0 && 
        (<Section title="upcoming Movies">
            {upcoming.map(movie => (
                <Poster 
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                koTitle={movie.title}
                imageUrl={movie.poster_path}
                backdropImg={movie.backdrop_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0,4)}
                isMovie={true}
                />
            ))}
        </Section>
        )}
        {nowPlaying && nowPlaying.length > 0 && 
        (<Section title="Now Playing">
            {nowPlaying.map(movie => (
                <Poster 
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                koTitle={movie.title}
                imageUrl={movie.poster_path}
                backdropImg={movie.backdrop_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0,4)}
                isMovie={true}
                />
            ))}
        </Section>
        )}
        {popular && popular.length > 0 && 
        (<Section title="popular Movies">
            {popular.map(movie => (
                <Poster 
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                koTitle={movie.title}
                imageUrl={movie.poster_path}
                backdropImg={movie.backdrop_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0,4)}
                isMovie={true}
                />
            ))}
        </Section>
        )}
        {error && <Message text={error} color="#c0392b" />}
    </Container>
);

HomePresenrter.protoTypes = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array,
    popular : PropTypes.array,
    error :  PropTypes.string,
    loading : PropTypes.bool.isRequired
};

 export default HomePresenrter;