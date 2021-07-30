import { expect } from 'chai';
import { TodoListController } from '../../controller/todolist';
import ApiManager from "../../apimanager/apimanager";

describe('TodoListController', () => {
  let controller;
  let apiManager;

  beforeEach(() => {
    apiManager = new ApiManager();
    controller = new TodoListController(new ApiManager());
  });

  it('should return the correct list', async () => {
    const dataFromApi = await apiManager.fetchData();
    const dataFromController = await controller.fetchData();
    //unit test for the client making the http call
    expect(dataFromController).to.have.length(200);
    let index = 1;
    dataFromApi.forEach(function (data) {
      expect(data.id).to.be.equal(index);
      expect(data.userid).to.not.be.null;
      expect(data.title).to.not.be.null;
      expect(data.completed).to.not.be.null;
      index++;
    });
    //integration test to ensure the client is injected properly
    expect(dataFromApi).to.deep.equal(dataFromController);
  });
});


