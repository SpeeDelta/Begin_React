import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: ProfileRoute,
})

// eslint-disable-next-line react-refresh/only-export-components
function ProfileRoute() {
  return (
      <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
        />
      </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 50,
};
