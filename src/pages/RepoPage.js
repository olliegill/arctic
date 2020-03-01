import React from 'react';
import PropTypes from 'prop-types';
import './repoPage.scss';
import { inject, observer } from "mobx-react";
import PageLayout from '../components/PageLayout';
import moment from 'moment';
import UserInteraction from '../components/UserInteraction';
import Eye from '../components/Eye';
import Star from '../components/Star';
import LoadingSpinner from '../components/LoadingSpinner';

class RepoPage extends React.Component {

    componentDidMount() {
        const params = this.props.match.params;
        this.props.appStore.fetchDataByRepoName(params.name, params.repo);
    }

    render() {
        const data = this.props.appStore && this.props.appStore.repoData;
        const owner = data && data.owner;

        if (this.props.appStore.isSearchResultsLoading) {
            return (
                <PageLayout>
                    <div className="searchList__loading">
                        <LoadingSpinner />
                    </div>
                </PageLayout>
            );
        }

        return (
            <PageLayout>
                <div className="repoPage">
                    <div className="repoPage__ownerDetails">
                        <div className="repoPage__ownerImageOuter">
                            <img alt="avatar" className="repoPage__ownerImage" src={owner && owner.avatar_url} />
                        </div>
                        <div className="repoPage__ownerData">
                            <div className="repoPage__ownerName">
                                {owner && owner.login}
                            </div>
                            <a className="repoPage__ownerLink" href={owner && owner.html_url}>
                                {owner && owner.html_url}
                            </a>
                        </div>
                    </div>
                    <div className="repoPage__repoDetails">
                        <div className="repoPage__repoName">
                            {data.name}
                        </div>
                        <div className="repoPage__repoDescription">
                            {data.description}
                        </div>
                        <div className="repoPage__repoUsers">
                            <UserInteraction
                                name="Star"
                                image={<Star />}
                                value={data.stargazers_count}
                            />
                            <UserInteraction
                                name="Watch"
                                image={<Eye />}
                                value={data.watchers_count}
                            />
                        </div>
                        <div className="repoPage__repoData">
                            {data.language}
                        </div>
                        <div className="repoPage__repoData">
                            Created: {moment(data.created_at).format("DD MMM YYYY HH:mm")}
                        </div>
                        <div className="repoPage__repoData">
                            Last Updated: {moment(data.updated_at).format("DD MMM YYYY HH:mm")}
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

RepoPage.propTypes = {
    appStore: PropTypes.object
}

export default inject(['appStore'])(observer(RepoPage));
