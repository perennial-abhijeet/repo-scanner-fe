import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";

const RepoList = () => {
  const navigate = useNavigate();

  const handleClick = (repo_name) => navigate(`/repo/${repo_name}`);

  return (
    <Query
      query={gql`
        query Query {
          userRepoList {
            name
            size
            owner {
              id
              login
              avatar_url
              url
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <ErrorComponent message={error.message} />;

        return (
          <div className="repo-list">
            <div className="container mt-5">
              <h1 className="bg-primary text-white p-3 text-center">
                User Repository List
              </h1>
              <table className="table table-bordered mt-5">
                <thead>
                  <tr>
                    <th className="bg-info text-white text-center">Sr. No.</th>
                    <th className="bg-info text-white text-center">
                      Repository Name
                    </th>
                    <th className="bg-info text-white text-center">
                      Repository Size
                    </th>
                    <th className="bg-info text-white text-center">
                      Owner Username
                    </th>
                    <th className="bg-info text-white text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.userRepoList.map((item, i) => (
                    <tr key={item.id}>
                      <td className="text-center">{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.size}</td>
                      <td>{item.owner.login}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleClick(item.name)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default RepoList;
