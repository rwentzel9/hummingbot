resource storageAccount 'Microsoft.Storage/storageAccounts@2019-06-01' = {
  name: 'hmmbtdevstorage'
  location: 'japaneast'
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
}
