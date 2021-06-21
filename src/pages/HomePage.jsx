import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "./../Redux/directory/directorySelector";
import Menu from "../components/Menu";
import { DirectoryMenu } from "./../styled/DirectoryMenu";

function HomePage({ sections }) {
  return (
    <div>
      <DirectoryMenu>
        {sections.map((section) => (
          <Menu key={section.id} {...section} />
        ))}
      </DirectoryMenu>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(HomePage);
