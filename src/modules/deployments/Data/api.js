import gql from 'graphql-tag'
import { deployment, deploymentConfig } from 'modules/api/fragments'

export default {
  Deployments: gql`
    query deployments(
      $workspaceId: Uuid
      $deploymentId: Uuid
      $releaseName: String
    ) {
      deployments(
        workspaceUuid: $workspaceId
        deploymentUuid: $deploymentId
        releaseName: $releaseName
      ) {
        ...deployment
      }
    }
    ${deployment}
  `,
  CreateDeployment: gql`
    mutation createDeployment(
      $type: String!
      $label: String!
      $workspaceId: Uuid!
      $version: String
      $description: String
      $config: JSON
    ) {
      createDeployment(
        workspaceUuid: $workspaceId
        type: $type
        label: $label
        version: $version
        description: $description
        config: $config
      ) {
        ...deployment
      }
    }
    ${deployment}
  `,
  UpdateDeployment: gql`
    mutation updateDeployment($id: Uuid!, $payload: JSON!) {
      updateDeployment(deploymentUuid: $id, payload: $payload) {
        ...deployment
      }
    }
    ${deployment}
  `,
  DeleteDeployment: gql`
    mutation deleteDeployment($id: Uuid!) {
      deleteDeployment(deploymentUuid: $id) {
        id: uuid
      }
    }
  `,
  DeploymentConfig: gql`
    query deploymentConfig(
      $workspaceId: Uuid
      $deploymentId: Uuid
      $type: String
      $version: String
    ) {
      deploymentConfig(
        workspaceUuid: $workspaceId
        deploymentUuid: $deploymentId
        type: $type
        version: $version
      ) {
        ...deploymentConfig
      }
    }
    ${deploymentConfig}
  `,
}
