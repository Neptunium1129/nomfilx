import React from 'react';
import TVPresenter from "./TVPresenter";
import { tvApi } from '../../api';

export default class extends React.Component {
    state = {
        topRated :null,
        airingToday :null,
        popular :null,
        error : null,
        loading : true
    };

    async componentDidMount(){
        try {
          const {data : {results : topRated }}  = await tvApi.topRated();
          const {data : {results : airingToday }}  = await tvApi.airingToday();
          const {data : {results : popular }}  = await tvApi.popular();

      
          this.setState({
              topRated,
              airingToday,
              popular
          });
        } catch (error) {
            this.setState({
                error: "FAIL GET MOVIE INFO"
            })
        }finally{
            this.setState({
                loading:false
            });
        }
    }

    render () {
        const { topRated, popular, airingToday, error, loading  } = this.state;
        console.log(this.state)
        
        return  (
        <TVPresenter 
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
        )
    };
}