import Axios from 'axios'
import { TContributorList, TRepositoryCommitList } from './types'

export async function getCurrentUserResponse(userID: string) {
    return await Axios.get<TContributorList>(`https://api.github.com/user/${userID}`)
}

export async function getRepositoryCommitsResponse(repositoryName: string) {
    return await Axios.get<TRepositoryCommitList>(`https://api.github.com/repos/${repositoryName}/commits`)
}

export async function getRepositoryContributorsResponse(repositoryName: string) {
    return await Axios.get<TContributorList>(`https://api.github.com/repos/${repositoryName}/contributors`)
}

export async function getCurrentRepositoryDetailsResponse(repositoryID: string) {
    return await Axios.get(`https://api.github.com/repositories/${repositoryID}`)
}

export async function getGithubRepositoriesResponse(searchParams: string) {
    return await Axios.get(`https://api.github.com/search/repositories?${searchParams}`)
}