import styled from "styled-components";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerWrapper>
        <div className="spinnerContainer" />
      </SpinnerWrapper>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export const SpinnerWrapper = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .spinnerContainer {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
`;

export default WithSpinner;
