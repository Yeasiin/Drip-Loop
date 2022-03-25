import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import styled from "styled-components";
import Menu from "../components/Menu";
import { selectDirectorySection } from "./../Redux/directory/directorySelector";

function Directory({ sections }) {
  return (
    <Wrapper>
      <h2>Shop By Category</h2>
      <nav>
        {sections.map((section) => (
          <Menu key={section.id} {...section} />
        ))}
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 80px;

  & > h2 {
    font-size: 28px;
    color: #223e3f;
  }

  & > nav {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
  }
`;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
