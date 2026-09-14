import { CatalogRepository } from "../catalog_repository";
import { BaseRepo } from "./core";
import { AddQueries } from "./queries";
import { AddStorage } from "./storage";
<<<<<<< HEAD

const RepoWithQueries = AddQueries(BaseRepo);
const CompleteRepo = AddStorage(RepoWithQueries);

=======
const RepoWithQueries = AddQueries(BaseRepo);
const CompleteRepo = AddStorage(RepoWithQueries);
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
export const CatalogRepoImpl = CompleteRepo;
