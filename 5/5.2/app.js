const BLOCK_SIZE = 5;
const IMAGE_SIZE = 600;
const INITIAL_IMAGE_COUNT = 10;
const INITIAL_BLOCKS_COUNT = 1;

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images: [], count: INITIAL_IMAGE_COUNT, scrolled_blocks: INITIAL_BLOCKS_COUNT};
  }

  componentDidMount() {
    this.UserList();
    window.addEventListener('scroll', this.showVisible.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showVisible.bind(this));
  }

  UserList() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        const images = res.data.map(obj => obj);
        this.setState({ images });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.images.slice(0, this.state.count).map(image =>
            <li>
              <h3>{image.albumId} {image.id} {image.title}</h3>
              <img id={image.albumId + "_" + image.id} src={image.url}/>
            </li>
          )}
        </ul>
      </div>
    );
  }

  showVisible(event) {
    var count = this.state.count;
    var scrolled_blocks = this.state.scrolled_blocks;
    var size = BLOCK_SIZE * IMAGE_SIZE;
    var scrolled = window.pageYOffset;
  
    if  (scrolled > size * scrolled_blocks){
        count += 5;
        scrolled_blocks += 1;
    }
      
    this.setState({count, scrolled_blocks });
  }
}

ReactDOM.render(
    <UserList/>,
    document.getElementById('root')
)