// import { useIsFetching } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTodos, useTodosIds } from '../services/queries';

export default function Todo() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);
  // const isFetching = useIsFetching();

  // if (todosIdsQuery.isPending) {
  //   return <span>loading...</span>;
  // }

  // if (todosIdsQuery.isError) {
  //   return <span>there is an error!</span>;
  // }

  return (
    <>
      {/* <p>Query function status: {todosIdsQuery.fetchStatus}</p>
      <p>Query data status: {todosIdsQuery.status}</p>
      <p>Global isFetching: {isFetching}</p> */}
      {todosIdsQuery.data?.map((id) => (
        <p key={id}>id: {id}</p>
      ))}

      <div>
        {todosQueries.map(({ data }) => (
          <Card key={data?.id}>
            <CardHeader>
              <CardTitle>
                <p>id: {data?.id}</p>
                <p>Title: {data?.title}</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description: {data?.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
