import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenrter = ({ result, error, loading, isMovie  }) => null;

DetailPresenrter.protoTypes = {
    result : PropTypes.object,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    //isMovie :PropTypes.bool.isRequired
};

 export default DetailPresenrter;