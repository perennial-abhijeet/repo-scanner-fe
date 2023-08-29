import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";

const SingleRepo = () => {
  let { repo_name } = useParams();

  return (
    <Query
      query={gql`
        query Query {
          repoScannerDetails(repoName: "${repo_name}"){
            name
            size
            private
            active_webhook
            yml_content
            total_files
            owner{
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
        if (loading) return <Loader text="Scanning..." />;
        if (error) return <ErrorComponent message={error.message} />;
        return (
          <>
            <div className="container mt-5">
              <h1 className="bg-primary text-white p-3 text-center">
                Scan Details
              </h1>
              <div className="container mt-5">
                <div className="border rounded p-3">
                  <h4>The scan details are as follows:</h4>
                  <table className="table table-bordered">
                    <tbody className="bg-info text-white col-3">
                      <tr>
                        <th className="bg-info text-white col-3">
                          Repository Name
                        </th>
                        <td>{data.repoScannerDetails.name}</td>
                      </tr>
                      <tr>
                        <th className="bg-info text-white col-3">
                          Owner Username
                        </th>
                        <td>{data.repoScannerDetails.owner.login}</td>
                      </tr>
                      <tr>
                        <th className="bg-info text-white col-3">
                          Is Repository Private
                        </th>
                        <td>
                          {data?.repoScannerDetails?.private ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-info text-white col-3">
                          Repository Size
                        </th>
                        <td>{data.repoScannerDetails.size}</td>
                      </tr>
                      <tr>
                        <th className="bg-info text-white col-3">
                          Active Webhooks
                        </th>
                        <td>
                          {data.repoScannerDetails.active_webhook
                            ? "Yes"
                            : "No"}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-info text-white col-3">
                          Total Files in Repo
                        </th>
                        <td>{data.repoScannerDetails.total_files}</td>
                      </tr>
                      <tr>
                        <th className="bg-info text-white col-3">
                          YML Content
                        </th>
                        <td>
                          {data.repoScannerDetails.yml_content ? "" : "null"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {data.repoScannerDetails.yml_content ? (
                    <>
                      <div className="yml-content">
                        <pre>
                          <strong>{data.repoScannerDetails.yml_content}</strong>
                        </pre>
                      </div>
                      <br />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};

export default SingleRepo;
